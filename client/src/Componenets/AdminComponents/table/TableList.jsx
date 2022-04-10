import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const data = [
        {
            id: 1,
            title: "playstation 5",
            img: "https://www.citypng.com/public/uploads/small/11598236451dfcgnhcditqzuqfxsbmsrg7fnbig7qhmizcrmdydcduyjcncc9qknmq5syjkjviviqpkiun37inwlonnbnybmrpzpfbq4dm6ybks.png",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
        {
            id: 2,
            title: "Mac pro",
            img: "https://www.citypng.com/public/uploads/small/11598236451dfcgnhcditqzuqfxsbmsrg7fnbig7qhmizcrmdydcduyjcncc9qknmq5syjkjviviqpkiun37inwlonnbnybmrpzpfbq4dm6ybks.png",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
        {
            id: 1,
            title: "playstation",
            img: "https://www.citypng.com/public/uploads/small/11598236451dfcgnhcditqzuqfxsbmsrg7fnbig7qhmizcrmdydcduyjcncc9qknmq5syjkjviviqpkiun37inwlonnbnybmrpzpfbq4dm6ybks.png",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
        {
            id: 1,
            title: "playstation",
            img: "https://www.citypng.com/public/uploads/small/11598236451dfcgnhcditqzuqfxsbmsrg7fnbig7qhmizcrmdydcduyjcncc9qknmq5syjkjviviqpkiun37inwlonnbnybmrpzpfbq4dm6ybks.png",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
    ]
    return (
        <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Tracking ID</TableCell>
                        <TableCell align="right" className="table-cell">Product</TableCell>
                        <TableCell align="right" className="table-cell">Custumer</TableCell>
                        <TableCell align="right" className="table-cell">Date</TableCell>
                        <TableCell align="right" className="table-cell">Price</TableCell>
                        <TableCell align="right" className="table-cell">Payment Method</TableCell>
                        <TableCell align="right" className="table-cell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableList