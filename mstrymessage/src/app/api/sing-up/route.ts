import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/model/user";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/app/helpers/sendVerificationEmai";
import { ifError } from "assert";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json()
        const existUserVerifiedByUsername = await UserModel.findOne({
            username,
            isverifyCode: true
        })

        if (existUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: 'Username already exists',
            }, {
                status: 400,
            })
        }

        const existingUserByEmail = await UserModel.findOne({ email })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerifed) {
                return Response.json({
                    success: false,
                    message: 'Email already exists',
                }, { status: 400, })
            } else {
                const hasedPassword = await bcrypt.hash(password, 10)
                existingUserByEmail.password = hasedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000); //1 hour

                await existingUserByEmail.save()

            }
        } else {
            const hasedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hasedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerifed: false,
                isAcceptedMessage: true,
                messages: []
            })

            await newUser.save()
        }

        //send verification email
        const emailResponse = await sendVerificationEmail(email, username, verifyCode)

        if (!emailResponse) {
            return Response.json({
                success: false,
                message: 'Failed to send verification email', //emailResponse.message
            }, {
                status: 500,
            })
        }

        return Response.json({
            success: true,
            message: 'user registered successfully.please verify your email', //emailResponse.message
        }, {
            status: 200,
        })

    } catch (error) {
        console.error('Error:', error);
        return Response.json({
            success: false,
            message: 'Internal server error',
        }),
        {
            status: 500,
        }
    }
}
