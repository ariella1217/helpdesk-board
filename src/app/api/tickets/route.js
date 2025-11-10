
export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Exchange account not syncing for iOS Mail app.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Sarah',
      updatedAt: '2025-10-30T09:12:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description: 'Battery drops from 100% to 20% in 2 hours.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T12:30:00Z'
    },
    {
      id: 't-1004',
      title: 'Okta MFA prompts repeatedly',
      description: 'User receives MFA prompts every time they open a new tab.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Chris',
      updatedAt: '2025-10-28T16:21:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer not responding on Floor 3',
      description: 'Network printer offline for multiple users.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T07:00:00Z'
    },
    {
      id: 't-1006',
      title: 'Teams screen share fails',
      description: 'Screen sharing drops connection after 5 minutes.',
      priority: 'High',
      status: 'Open',
      assignee: 'Alex',
      updatedAt: '2025-10-30T06:00:00Z'
    },
    {
      id: 't-1007',
      title: 'New hire laptop provisioning',
      description: 'Laptop accounts and settings baseline needed.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Morgan',
      updatedAt: '2025-10-29T14:45:00Z'
    },
    {
      id: 't-1008',
      title: 'Wi-Fi drops in Conference Room A',
      description: 'Signal lost during large meetings.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:15:00Z'
    },
    {
      id: 't-1009',
      title: 'Locked out of Salesforce',
      description: 'User cannot complete MFA push notification.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Sam',
      updatedAt: '2025-10-29T10:05:00Z'
    },
    {
      id: 't-1010',
      title: 'Zoom audio echoes',
      description: 'Audio feedback during multiple attendees.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T09:00:00Z'
    },
    {
      id: 't-1011',
      title: 'Shared drive permissions',
      description: 'Cannot access team shared documents.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Priya',
      updatedAt: '2025-10-30T13:45:00Z'
    },
    {
      id: 't-1012',
      title: 'Slack notifications delayed',
      description: 'Messages arrive 10-15 minutes late.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:45:00Z'
    },
    {
      id: 't-1013',
      title: 'MacOS update failing',
      description: 'System update stuck at 50%.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Jordan',
      updatedAt: '2025-10-31T03:45:00Z'
    },
    {
      id: 't-1014',
      title: 'SFTP key rotation',
      description: 'Need to update SSH keys for file transfers.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Sam',
      updatedAt: '2025-10-31T09:03:00Z'
    },
    {
      id: 't-1015',
      title: 'Calendar invites not delivered',
      description: 'External attendees not receiving meeting invites.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T06:25:00Z'
    }
  ];
  
  return Response.json(tickets);
}