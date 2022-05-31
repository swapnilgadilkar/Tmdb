module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './app/api',
          '@components': './app/components',
          '@config': './app/config',
          '@constants': './app/constants',
          '@context': './app/context',
          '@modules': './app/modules',
          '@navigation': './app/navigation',
          '@theme': './app/theme',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
