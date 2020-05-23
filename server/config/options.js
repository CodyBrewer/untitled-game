module.exports = {
  port: process.env.PORT || 4000,
  cors: {
    credentials: true, 
    origin: [
      'http://localhost:3000',
    ],
    methods: "POST,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204, 
    subscriptions: "/subscriptions",
  },
};