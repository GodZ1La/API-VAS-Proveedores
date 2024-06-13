module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true,
        regenerator: true,
      },
    ],
    [
      'babel-plugin-direct-import',
      {
        modules: [
          '@mui/lab',
          '@mui/system',
          '@mui/material',
          '@mui/icons-material',
        ],
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: 'current node',
          },
        ],
      ],
    },
  },
};
