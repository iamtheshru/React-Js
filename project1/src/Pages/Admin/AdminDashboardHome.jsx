import { Chart } from "react-google-charts";

const AdminDashboardHome = () => {
    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];
    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
    };

    return (<>
        <Chart
            chartType="ScatterChart"
            data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
            width="100%"
            height="400px"
            legendToggle
        />

        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />

    </>);
}

export default AdminDashboardHome;