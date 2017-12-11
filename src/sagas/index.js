import { fork, all } from 'redux-saga/effects'
import { watchArticles, watchStickyArticles } from './articlesSaga'
import {
  watchSignUp,
  watchLogin,
  watchLogout,
  watchPutUserInfo,
  watchGetUserInfo
} from './userSaga'
import {
  watchPostTeams,
  watchPutTeams,
  watchDeleteTeamMember,
  watchDeleteTeam,
  watchGetHomeTeamList,
  watchGetHomeTeamDetail,
  watchGetMyTeams,
  watchGetInTeams
} from './teamsSaga'
import { watchUpload } from './commonSaga'
import { watchGetHomeUserList, watchGetHomeUserDetail } from './userSaga'
import {
  watchGetAccountRecruitOrderList,
  watchGetHomeRecruitOrderList,
  watchPostRecruitOrder,
  watchPutRecruitOrder,
  watchDeleteRecruitOrder
} from './recruitOrderSaga'
import {
  watchGetAccountGroupOrderList,
  watchGetHomeGroupOrderList,
  watchPostGroupOrder,
  watchPutGroupOrder,
  watchDeleteGroupOrder
} from './groupOrderSaga'
import {
  watchGetAccountWarOrderList,
  watchGetHomeWarOrderList,
  watchPostWarOrder,
  watchPutWarOrder,
  watchDeleteWarOrder
} from './warOrderSaga'
import {
  watchGetAccountResumeOrderList,
  watchGetHomeResumeOrderList,
  watchPostResumeOrder,
  watchPutResumeOrder,
  watchDeleteResumeOrder
} from './resumeOrderSaga'

export default function* rootSaga() {
  yield all([
    fork(watchArticles),
    fork(watchStickyArticles),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
    fork(watchUpload),
    fork(watchPutUserInfo),
    fork(watchGetUserInfo),
    fork(watchPostTeams),
    fork(watchPutTeams),
    fork(watchDeleteTeamMember),
    fork(watchDeleteTeam),
    fork(watchGetHomeUserList),
    fork(watchGetHomeUserDetail),
    fork(watchGetHomeTeamList),
    fork(watchGetHomeTeamDetail),
    fork(watchGetMyTeams),
    fork(watchGetInTeams),
    fork(watchGetAccountRecruitOrderList),
    fork(watchGetHomeRecruitOrderList),
    fork(watchPostRecruitOrder),
    fork(watchPutRecruitOrder),
    fork(watchDeleteRecruitOrder),
    fork(watchGetAccountGroupOrderList),
    fork(watchGetHomeGroupOrderList),
    fork(watchPostGroupOrder),
    fork(watchPutGroupOrder),
    fork(watchDeleteGroupOrder),
    fork(watchGetAccountWarOrderList),
    fork(watchGetHomeWarOrderList),
    fork(watchPostWarOrder),
    fork(watchPutWarOrder),
    fork(watchDeleteWarOrder),
    fork(watchGetAccountResumeOrderList),
    fork(watchGetHomeResumeOrderList),
    fork(watchPostResumeOrder),
    fork(watchPutResumeOrder),
    fork(watchDeleteResumeOrder)
  ])
}
