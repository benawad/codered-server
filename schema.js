export default `

  type Casing {
    nominalId: Float!
    driftId: Float!
  }

  type Query {
    getCasing(size: Float!, weight: Float!): Casing!
  }

`;
