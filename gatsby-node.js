// const mongoose = require('mongoose')
// const crypto = require(`crypto`)

// const prepareMappingChildNode = require(`./mapping`)

// const _ = require(`lodash`)

// const queryString = require(`query-string`)

// //DB config
// const dbKeys = require('./keys/keys').mongoURI

// exports.sourceNodes = (
//   { actions, getNode, createNodeId, hasNodeChanged },
//   pluginOptions
// ) => {
//   // const { createNode } = actions
//   const createNode = actions.createNode

//   return mongoose
//     .connect(
//       dbKeys,
//       { useNewUrlParser: true }
//     )
//     .then(db => {
//       let collection = pluginOptions.collection || [
//         `attractions`,
//         `packages`,
//         `photos`,
//         `rooms`,
//       ]
//       if (!_.isArray(collection)) {
//         collection = [collection]
//       }

//       pluginOptions.map = {
//         rooms: {
//           photos: {
//             links: `string`,
//           },
//         },
//       }

//       return Promise.all(
//         collection.map(col =>
//           createNodes(db, pluginOptions, 'test', createNode, createNodeId, col)
//         )
//       )
//         .then(() => {
//           mongoose.connection.close()
//         })
//         .catch(err => {
//           console.warn(err)
//           mongoose.connection.close()
//           return err
//         })
//     })
//     .catch(err => {
//       console.warn(err)
//       return err
//     })
// }

// function createNodes(
//   db,
//   pluginOptions,
//   dbName,
//   createNode,
//   createNodeId,
//   collectionName
// ) {
//   return new Promise((resolve, reject) => {
//     let collection = mongoose.connection.db.collection(collectionName)
//     let cursor = collection.find() // Execute the each command, triggers for each document

//     cursor.toArray((err, documents) => {
//       if (err) {
//         reject(err)
//       }

//       documents.forEach(item => {
//         var id = item._id.toString()

//         delete item._id

//         var node = Object.assign({}, item, {
//           id: createNodeId(`${id}`),
//           mongodb_id: id,
//           parent: `__${collectionName}__`,
//           children: [],
//           internal: {
//             type: `mongodb${sanitizeName(dbName)}${sanitizeName(
//               collectionName
//             )}`,
//             content: JSON.stringify(item),
//             contentDigest: crypto
//               .createHash(`md5`)
//               .update(JSON.stringify(item))
//               .digest(`hex`),
//           },
//         })

//         const childrenNodes = []
//         if (pluginOptions.map) {
//           let mapObj = pluginOptions.map

//           if (pluginOptions.map[collectionName]) {
//             mapObj = pluginOptions.map[collectionName]
//           } // We need to map certain fields to a contenttype.

//           Object.keys(mapObj).forEach(mediaItemFieldKey => {
//             if (
//               node[mediaItemFieldKey] &&
//               (typeof mapObj[mediaItemFieldKey] === `string` ||
//                 mapObj[mediaItemFieldKey] instanceof String)
//             ) {
//               const mappingChildNode = prepareMappingChildNode(
//                 node,
//                 mediaItemFieldKey,
//                 node[mediaItemFieldKey],
//                 mapObj[mediaItemFieldKey],
//                 createNode
//               )
//               node[`${mediaItemFieldKey}___NODE`] = mappingChildNode.id
//               childrenNodes.push(mappingChildNode)
//               delete node[mediaItemFieldKey]
//             }
//           })
//         }
//         createNode(node)
//         childrenNodes.forEach(node => {
//           createNode(node)
//         })
//       })
//       resolve()
//     })
//   })
// }

// function sanitizeName(s) {
//   return s.replace(/[^_a-zA-Z0-9]/, ``).replace(/\b\w/g, l => l.toUpperCase())
// }

// function getConnectionExtraParams(extraParams) {
//   let connectionSuffix

//   if (extraParams) {
//     connectionSuffix = queryString.stringify(extraParams, {
//       sort: false,
//     })
//   }

//   return connectionSuffix ? `?` + connectionSuffix : ``
// }
