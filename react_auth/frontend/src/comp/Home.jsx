import { useEffect, useState } from 'react';
import Cardlist from './Cardlist.jsx';
import CardFilter from './CardFilter.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [card, setCard] = useState([]);
    const [filtercard, setFiltercard] = useState([])
    const [filters, setFilters] = useState({
        size: '',
        category: '',
        minprice: '',
        maxprice: ''
    });

    const token = localStorage.getItem('token');
    const navigation = useNavigate();

    const fetchData = async () => {
        if (!token) {
            alert('Session Expired.please login again.')
            navigation("/login") //page reload nahi thay
        }
        // if (!token) {
        //     window.location.href = "/login";  //page reload thase
        //     return;
        //   }

        try {
            const ressponce = await axios.get('http://localhost:5000/cards', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCard(ressponce.data);
            setFiltercard(ressponce.data);
        } catch (error) {

            console.log("error", error);
            if (error.ressponce?.status === 401) {
                alert('Session Expired.please login again.')
                localStorage.removeItem('token')
                navigation("/login")
            }
        }
    }

    useEffect(() => {
        const filteredata = card.filter((item) => {
            // console.log("item", item);      
            const matchesSize = filters.size ? item.size === filters.size : true;
            const matchesCategory = filters.category ? item.category === filters.category : true;
            const matchesMinPrice = filters.minprice ? item.price >= parseFloat(filters.minprice) : true;
            const matchesMaxPrice = filters.maxprice ? item.price <= parseFloat(filters.maxprice) : true;
            return matchesSize && matchesCategory && matchesMinPrice && matchesMaxPrice;
        })

        setFiltercard(filteredata);
        console.log("matchesize", (filteredata));
        // console.log(filteredata);
    }, [filters, card])

    useEffect(() => {
        fetchData();
    }, [])
    return (<>
        <div className='bg-gray-100'>
            <h1 className='text-center text-2xl font-bold py-4'>Cards Data</h1>
            <div className="flex flex-col md:flex-row px-4 gap-6">
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <CardFilter filters={filters} setFilters={setFilters} />
                    <div className='w-full'>
                        <Cardlist card={filtercard} />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;