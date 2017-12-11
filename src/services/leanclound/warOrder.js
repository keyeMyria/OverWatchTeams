import AV from 'leancloud-storage'
import { getCurrentUser } from './user'

// 创建战队训练赛约战
export function cerateWarOrder(payload) {
  const user = getCurrentUser()
  const team = AV.Object.createWithoutData('Teams', payload.teamid)
  const warOrders = new AV.Object('WarOrders')
  warOrders.set('title', payload.title)
  warOrders.set('description', payload.description)
  warOrders.set('contact', payload.contact)
  const endDate = new Date(payload.endDate)
  warOrders.set('endDate', endDate)
  warOrders.set('user', user)
  warOrders.set('team', team)

  var acl = new AV.ACL()
  acl.setPublicReadAccess(true)
  acl.setWriteAccess(user, true)

  warOrders.setACL(acl)

  return warOrders.save().then(function(result) {
    return result.toJSON()
  })
}

export function updateWarOrder(payload, team) {
  const user = getCurrentUser()
  const warOrders = AV.Object.createWithoutData(
    'WarOrders',
    payload.objectId
  )
  warOrders.set('title', payload.title)
  warOrders.set('description', payload.description)
  warOrders.set('contact', payload.contact)
  const endDate = new Date(payload.endDate)
  warOrders.set('endDate', endDate)
  warOrders.set('user', user)
  warOrders.set('team', team)

  return warOrders.save().then(function(result) {
    return {
      ...result.toJSON(),
      team: team.toJSON()
    }
  })
}

export function removeWarOrder(payload) {
  var warOrders = AV.Object.createWithoutData('WarOrders', payload.objectId)
  return warOrders.destroy().then(function(success) {
    return success.toJSON()
  })
}

export function getAccountWarOrderList(payload) {
  let list = []
  let { page, pagesize } = payload
  pagesize = pagesize || 20
  const user = getCurrentUser()
  const query = new AV.Query('WarOrders')
  query.descending('updatedAt')
  query.limit(pagesize)
  query.skip(pagesize * (page - 1))
  query.equalTo('user', user)
  query.greaterThanOrEqualTo('endDate', new Date())
  query.include('user')
  query.include('user.userinfo')
  query.include('team')
  return query.find().then(function(result) {
    result.forEach(item => {
      const userinfo = item
        .get('user')
        .get('userinfo')
        .toJSON()
      const team = item.get('team').toJSON()
      const res = { ...item.toJSON(), userinfo, team }
      list.push(res)
    })
    return list
  })
}

export function getHomeWarOrderList(payload) {
  let list = []
  let { page, pagesize } = payload
  pagesize = pagesize || 20
  const query = new AV.Query('WarOrders')
  query.limit(pagesize)
  query.skip(pagesize * (page - 1))
  query.greaterThanOrEqualTo('endDate', new Date())
  query.include('user')
  query.include('user.userinfo')
  query.include('team')
  return query.find().then(function(result) {
    result.forEach(item => {
      const userinfo = item
        .get('user')
        .get('userinfo')
        .toJSON()
      const team = item.get('team').toJSON()
      const res = { ...item.toJSON(), userinfo, team }
      list.push(res)
    })
    return list
  })
}