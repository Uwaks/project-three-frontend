import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


// Auth Requests
export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

export function showUserProfile() {
  return axios.get(`${baseUrl}/user`, headers())
}

export function updateUser() {
  return axios.put(`${baseUrl}/users/:userId`, headers())
}



// Club Requests

export function getAllClubs() {
  return axios.get(`${baseUrl}/clubs`)
}

export function getSingleClub(clubId) {
  return axios.get(`${baseUrl}/clubs/${clubId}`)
}

export function createClub(formData) {
  return axios.post(`${baseUrl}/club`, formData, headers())
}

export function deleteClub(clubId, formData) {
  return axios.delete(`${baseUrl}/clubs/${clubId}`, formData, headers())
}

export function editClub(clubId, formData) {
  return axios.put(`${baseUrl}/clubs/${clubId}`, formData, headers())
}

export function likeClub(clubId, userId) {
  return axios.post(`${baseUrl}/clubs/${clubId}/like`, userId, headers())
}


// Pub Requests


export function getAllPubs() {
  return axios.get(`${baseUrl}/pubs`)
}

export function getSinglePub(clubId, pubId) {
  return axios.get(`${baseUrl}/clubs/${clubId}/pubs/${pubId}`)
}

export function createPub(clubId, formdata) {
  return axios.post(`${baseUrl}/clubs/${clubId}/pubs`, formdata, headers())
}

export function deletePub(pubId) {
  return axios.delete(`${baseUrl}/pubs/${pubId}`, headers())
}

export function editPub(pubId, formdata){
  return axios.put(`${baseUrl}/pubs/${pubId}`, formdata, headers())
}

export function likePub(clubId, pubId, userId) {
  return axios.post(`${baseUrl}/clubs/${clubId}/pubs/${pubId}/like`, userId, headers())
}

// Comments

export function getAllComments(clubId, pubId){
  return axios.get(`${baseUrl}/clubs/${clubId}/pubs/${pubId}/comments`)
}

export function createAComment(clubId, pubId, formData) {
  return axios.post(`${baseUrl}/clubs/${clubId}/pubs/${pubId}/comments`, formData, headers())
}

export function deleteAComment(clubId, pubId, commentId) {
  return axios.delete(`${baseUrl}/clubs/${clubId}/pubs/${pubId}/comments/${commentId}`)
}


