import axios from '@axios'

export const GET_DETAIL = params => axios.ajax({ url: `/apis/gw/getPatientPayTicket`, params })