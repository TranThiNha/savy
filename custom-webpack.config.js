module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "primary-color": "#7B35BB",
                },
              },
            },
          },
        ],
      },
    ],
  },
};
