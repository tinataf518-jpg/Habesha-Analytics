/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  avatar: string;
}

export interface ChartData {
  name: string;
  revenue: number;
  users: number;
}

export const MOCK_STATS: Stat[] = [
  { id: '1', label: 'Total Revenue', value: '128,430 Birr', change: '+12.5%', trend: 'up' },
  { id: '2', label: 'Active Users', value: '4,502', change: '+18.2%', trend: 'up' },
  { id: '3', label: 'Churn Rate', value: '2.4%', change: '-0.5%', trend: 'down' },
  { id: '4', label: 'Conversion', value: '14.2%', change: '+2.1%', trend: 'up' },
];

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Abebe Bikila', email: 'abebe@ethio.io', role: 'Owner', status: 'active', lastActive: '2 mins ago', avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop' },
  { id: '2', name: 'Almaz Ayana', email: 'almaz.a@habesha.com', role: 'Admin', status: 'active', lastActive: '1 hr ago', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop' },
  { id: '3', name: 'Mulugeta Seraw', email: 'mulu@tech-addis.com', role: 'Member', status: 'pending', lastActive: 'Never', avatar: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=100&h=100&fit=crop' },
  { id: '4', name: 'Tigist Assefa', email: 'tigist@sport.et', role: 'Member', status: 'active', lastActive: '12 mins ago', avatar: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?w=100&h=100&fit=crop' },
  { id: '5', name: 'Dawit Yohannes', email: 'dawit.y@business.et', role: 'Admin', status: 'inactive', lastActive: '2 days ago', avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop' },
  { id: '6', name: 'Eskender Negash', email: 'eskender@fintech.et', role: 'Member', status: 'active', lastActive: '5 mins ago', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop' },
  { id: '7', name: 'Fikirte Haddis', email: 'fikirte@design.et', role: 'Member', status: 'pending', lastActive: '1 day ago', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop' },
];

export const REVENUE_DATA: ChartData[] = [
  { name: 'Jan', revenue: 45000, users: 1200 },
  { name: 'Feb', revenue: 52000, users: 1400 },
  { name: 'Mar', revenue: 48000, users: 1350 },
  { name: 'Apr', revenue: 61000, users: 1800 },
  { name: 'May', revenue: 59000, users: 1750 },
  { name: 'Jun', revenue: 72000, users: 2100 },
  { name: 'Jul', revenue: 84000, users: 2400 },
];

export const FUNNEL_DATA = [
  { name: 'Visitors', value: 12500, fill: '#6366f1' },
  { name: 'Signups', value: 4200, fill: '#818cf8' },
  { name: 'Verified', value: 3100, fill: '#a5b4fc' },
  { name: 'Trial', value: 1200, fill: '#c7d2fe' },
  { name: 'Paid', value: 450, fill: '#e0e7ff' },
];

export const PLANS = [
  { name: 'Basic', price: '500 Birr', features: ['Up to 5 users', '10GB Storage', 'Standard Support'] },
  { name: 'Global', price: '1,500 Birr', features: ['Up to 25 users', '100GB Storage', 'Priority Support', 'API Access'], current: true },
  { name: 'Enterprise', price: '4,500 Birr', features: ['Unlimited users', '1TB Storage', '24/7 Support', 'Custom Integration'] },
];

export const INVOICES = [
  { id: 'INV-ET-001', date: 'May 01, 2026', amount: '1,500 Birr', status: 'Paid' },
  { id: 'INV-ET-002', date: 'Apr 01, 2026', amount: '1,500 Birr', status: 'Paid' },
  { id: 'INV-ET-003', date: 'Mar 01, 2026', amount: '1,500 Birr', status: 'Paid' },
];
