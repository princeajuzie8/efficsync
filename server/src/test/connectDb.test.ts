// ConnectDB.test.ts

const mongoose = require('mongoose');
const ConnectDB = require('../../db/dbConnect'); // Adjust the path accordingly

// Mock mongoose
jest.mock('mongoose');

// Write the test
describe('ConnectDB function', () => {
  it('should connect to MongoDB successfully', async () => {
    // Mock mongoose.connect to resolve successfully
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(null);

    // Mock server object
    const mockServer = {
      listen: jest.fn()
    };

    // Directly use the MongoDB connection string
    const mongoConnectionString = process.env.MONGO_URL;

    // Call the ConnectDB function
    await ConnectDB(mockServer,{"useNewUrlParser": true, "useUnifiedTopology": true});

    // Expect that mongoose.connect was called with the correct arguments
    expect(mongoose.connect).toHaveBeenCalledWith(mongoConnectionString);
  });
});
