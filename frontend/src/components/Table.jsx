import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/Table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";

const SalesManagement = () => {
  const [month, setMonth] = useState('3'); // Default to March
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0); // New state to store total records

  const fetchTransactions = async () => {
    try {
      const bodyData = {
        page: page.toString(),
        perPage: '10',
        search: search,
        month: month, // Include month in the request body
      };
  
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      
      const data = await response.json();
      setTransactions(data.transactions);
      setTotalPages(data.totalPages);
      setTotalRecords(data.totalRecords); // Set the total records from response
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [month, search, page]);

  const months = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' },
    { value: '8', label: 'Aug' },
    { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
  ];

  return (
    <Card className="w-full max-w-6xl mx-auto bg-white shadow-sm rounded-lg">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-xl font-semibold">Transaction Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4 space-x-4">
          <Select value={month} onValueChange={(value) => setMonth(value)}>
            <SelectTrigger className="w-[180px] bg-gray-200 text-gray-700 border border-gray-300 rounded-md">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 rounded-md">
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value} className="text-gray-600">
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="search"
            placeholder="Search transactions"
            className="max-w-sm bg-gray-200 text-gray-700 border border-gray-300 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-white">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">ID</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Title</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Description</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Category</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Price</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Date</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Sold</TableHead>
                <TableHead className="py-3 px-4 text-left text-sm text-gray-600">Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="border-b border-gray-200">
                  <TableCell className="py-3 px-4 text-sm text-gray-600">{transaction.id}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">{transaction.title}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">{transaction.description}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">{transaction.category}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">${transaction.price.toFixed(2)}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">
                    {new Date(transaction.dateOfSale).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge variant={transaction.sold ? "success" : "secondary"}>
                      {transaction.sold ? "Sold" : "Available"}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm">
                    <img
                      src={transaction.image}
                      alt={transaction.title}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="bg-blue-500 text-white"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages} ({totalRecords} records)
          </span>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="bg-blue-500 text-white"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesManagement;
