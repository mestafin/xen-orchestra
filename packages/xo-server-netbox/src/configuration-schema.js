const configurationSchema = {
  description:
    'Synchronize pools managed by Xen Orchestra with Netbox. Configuration steps: https://xen-orchestra.com/docs/advanced.html#netbox.',
  type: 'object',
  properties: {
    endpoint: {
      type: 'string',
      title: 'Endpoint',
      description: 'Netbox URI',
    },
    allowUnauthorized: {
      type: 'boolean',
      title: 'Unauthorized certificates',
      description: 'Enable this if your Netbox instance uses a self-signed SSL certificate',
    },
    token: {
      type: 'string',
      title: 'Token',
      description: 'Generate a token with write permissions from your Netbox interface',
    },
    pools: {
      type: 'array',
      title: 'Pools',
      description: 'Pools to synchronize with Netbox',
      items: {
        type: 'string',
        $type: 'pool',
      },
    },
    syncInterval: {
      type: 'number',
      title: 'Interval',
      description: 'Synchronization interval in hours - leave empty to disable auto-sync',
    },
  },
  required: ['endpoint', 'token', 'pools'],
}

export { configurationSchema as default }