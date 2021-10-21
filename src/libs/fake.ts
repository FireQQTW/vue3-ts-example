export class FackGRPCres<resType> {
  data: resType
  constructor (fakeData: resType) {
    this.data = fakeData
  }

  toObject(): resType {
    return this.data
  }
}

