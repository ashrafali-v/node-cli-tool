const {csvFileGenerator} = require('./csvfilegenerator');
const fs = require('fs');
const fastcsv = require('fast-csv');
const { PassThrough } = require('stream')
jest.mock('fs')
jest.mock('fast-csv')
describe('csvFileGenerator', () => {
  it('rejects/errors if a stream error occurs', async () => {
    const mockReadable = new PassThrough()
    const mockWriteable = new PassThrough()
    const mockFilePath = '/oh/file.txt'
    fs.createWriteStream.mockReturnValueOnce(mockWriteable)

    // Act & Assert
    await expect(csvFileGenerator(mockReadable, mockFilePath))
      .rejects.toEqual(undefined)
  })
})