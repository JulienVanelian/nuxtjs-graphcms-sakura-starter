import { GraphQLClient } from 'graphql-request'

export default (_, inject) => {
  inject('graphcms', new GraphQLClient(process.env.graphcmsEndpoint))
}