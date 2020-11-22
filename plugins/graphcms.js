import { GraphQLClient } from 'graphql-request'

const url = process.env.GRAPHCMS_ENDPOINT

export default (_, inject) => {
  inject('graphcms', new GraphQLClient(process.env.graphcmsEndpoint))
}