module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateProduct {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  createdAt: DateTime!
  title: String!
  price: Float!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  title: String!
  price: Float!
  reviews: ReviewCreateManyWithoutProductInput
}

input ProductCreateOneWithoutReviewsInput {
  create: ProductCreateWithoutReviewsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutReviewsInput {
  id: ID
  title: String!
  price: Float!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  price_ASC
  price_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  price: Float!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  title: String
  price: Float
  reviews: ReviewUpdateManyWithoutProductInput
}

input ProductUpdateManyMutationInput {
  title: String
  price: Float
}

input ProductUpdateOneRequiredWithoutReviewsInput {
  create: ProductCreateWithoutReviewsInput
  update: ProductUpdateWithoutReviewsDataInput
  upsert: ProductUpsertWithoutReviewsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutReviewsDataInput {
  title: String
  price: Float
}

input ProductUpsertWithoutReviewsInput {
  update: ProductUpdateWithoutReviewsDataInput!
  create: ProductCreateWithoutReviewsInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  createdAt: DateTime!
  text: String!
  product: Product!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  id: ID
  text: String!
  product: ProductCreateOneWithoutReviewsInput!
}

input ReviewCreateManyWithoutProductInput {
  create: [ReviewCreateWithoutProductInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutProductInput {
  id: ID
  text: String!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  text: String
  product: ProductUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateManyDataInput {
  text: String
}

input ReviewUpdateManyMutationInput {
  text: String
}

input ReviewUpdateManyWithoutProductInput {
  create: [ReviewCreateWithoutProductInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutProductDataInput {
  text: String
}

input ReviewUpdateWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutProductDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutProductDataInput!
  create: ReviewCreateWithoutProductInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  product: ProductWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
}
`
      }
    