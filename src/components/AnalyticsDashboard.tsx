import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Clock
} from 'lucide-react';

// Sample data for charts
const monthlyRevenue = [
  { month: 'Jan', revenue: 12000, orders: 240 },
  { month: 'Feb', revenue: 15000, orders: 300 },
  { month: 'Mar', revenue: 18000, orders: 360 },
  { month: 'Apr', revenue: 22000, orders: 440 },
  { month: 'May', revenue: 25000, orders: 500 },
  { month: 'Jun', revenue: 28000, orders: 560 },
];

const userActivity = [
  { time: '00:00', users: 120, sessions: 180 },
  { time: '04:00', users: 80, sessions: 120 },
  { time: '08:00', users: 200, sessions: 300 },
  { time: '12:00', users: 350, sessions: 525 },
  { time: '16:00', users: 280, sessions: 420 },
  { time: '20:00', users: 150, sessions: 225 },
];

const trafficSources = [
  { name: 'Direct', value: 45, color: '#8884d8' },
  { name: 'Search', value: 30, color: '#82ca9d' },
  { name: 'Social', value: 15, color: '#ffc658' },
  { name: 'Email', value: 10, color: '#ff7300' },
];

const topProducts = [
  { name: 'Premium Widget', sales: 1250, revenue: 25000, growth: 12.5 },
  { name: 'Standard Widget', sales: 980, revenue: 19600, growth: 8.2 },
  { name: 'Basic Widget', sales: 750, revenue: 15000, growth: -2.1 },
  { name: 'Pro Widget', sales: 420, revenue: 21000, growth: 15.8 },
];

const recentActivity = [
  { user: 'John Doe', action: 'Made a purchase', time: '2 minutes ago', amount: '$299' },
  { user: 'Jane Smith', action: 'Signed up', time: '5 minutes ago', amount: '' },
  { user: 'Mike Johnson', action: 'Completed order', time: '8 minutes ago', amount: '$149' },
  { user: 'Sarah Wilson', action: 'Updated profile', time: '12 minutes ago', amount: '' },
  { user: 'David Brown', action: 'Made a purchase', time: '15 minutes ago', amount: '$199' },
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Last 30 days</span>
            </Button>
            <Button className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4" />
              <span>Export Report</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">$128,000</div>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">2,456</div>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+8.2% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Active Users</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">1,234</div>
              <div className="flex items-center space-x-1 text-xs text-red-600">
                <TrendingDown className="h-3 w-3" />
                <span>-2.1% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Conversion Rate</CardTitle>
              <Activity className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">3.2%</div>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+0.5% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue and order trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* User Activity Chart */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">User Activity</CardTitle>
              <CardDescription>Real-time user engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userActivity}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sessions" 
                      stroke="#06b6d4" 
                      strokeWidth={2}
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Traffic Sources */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Traffic Sources</CardTitle>
              <CardDescription>Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {trafficSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="text-sm text-slate-600">{source.name}</span>
                    </div>
                    <span className="text-sm font-medium text-slate-900">{source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Top Products</CardTitle>
              <CardDescription>Best performing products this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{product.name}</div>
                      <div className="text-sm text-slate-600">
                        {product.sales} sales • ${product.revenue.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={product.growth > 0 ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {product.growth > 0 ? (
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                        )}
                        {Math.abs(product.growth)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Recent Activity</CardTitle>
              <CardDescription>Latest user interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-900">{activity.user}</div>
                      <div className="text-sm text-slate-600">{activity.action}</div>
                      <div className="text-xs text-slate-500">{activity.time}</div>
                    </div>
                    {activity.amount && (
                      <div className="text-sm font-medium text-green-600">{activity.amount}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
