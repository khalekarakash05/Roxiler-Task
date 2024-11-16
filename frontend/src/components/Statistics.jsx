import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

export default function Component() {
  const [month, setMonth] = useState('Mar')
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/statistics`, {
          method: 'POST', // Changed to POST
          headers: {
            'Content-Type': 'application/json', // Added headers
          },
          body: JSON.stringify({ month }), // Sending month in the request body
        })
        const data = await response.json()
        console.log("data is here ", data)
        setStats(data)
      } catch (error) {
        console.error('Error fetching statistics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStatistics()
  }, [month])

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Transactions Statistics
        <span className="text-sm font-normal text-gray-500 ml-2">
          Overview of transaction data
        </span>
      </h1>

      <Card className="bg-gray-50 border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium flex items-center gap-2 text-gray-800">
            Statistics - 
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="w-[180px] text-gray-700">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm font-normal text-gray-500">
              (Selected month name from dropdown)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-32 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
            </div>
          ) : stats ? (
            <div className="bg-gray-100 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Total sale</span>
                <span className="font-medium">{stats.totalSaleAmount}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Total sold item</span>
                <span className="font-medium">{stats.totalSoldItems}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Total not sold item</span>
                <span className="font-medium">{stats.totalNotSoldItems}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Failed to load statistics
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
