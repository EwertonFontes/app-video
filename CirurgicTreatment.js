import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class CirurgicTreatment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cea: [
        {key: 0, name: 'Com Reconstrução', type: [
          {key: 0, name: 'Latíssimo do Dorso', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 1, name: 'Expansor', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 2, name: 'Retalho Abdominal', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 3, name: 'Retalho Locorregional', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
        ]},
        {key: 1, name: 'Sem Reconstrução', type: [
          {key: 0, name: 'Quimioterapia', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
          {key: 1, name: 'Radioterapia', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
          {key: 2, name: 'Quimio + Radio', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
        ]},
      ],

      sea: [
       {key: 0, name: 'Com Reconstrução', type: [
          {key: 0, name: 'Latíssimo do Dorso', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 1, name: 'Expansor', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 2, name: 'Retalho Abdominal', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
          {key: 3, name: 'Retalho Locorregional', type: [
            {key: 0, name: 'Quimioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 1, name: 'Radioterapia', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
            {key: 2, name: 'Quimio + Radio', exercicio: [
              { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
              { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
              { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
            ]},
          ]},
        ]},
        {key: 1, name: 'Sem Reconstrução', type: [
          {key: 0, name: 'Quimioterapia', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
          {key: 1, name: 'Radioterapia', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
          {key: 2, name: 'Quimio + Radio', exercicio: [
            { key: 0, name: 'Exercicio 1', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' },  
            { key: 1, name: 'Exercicio 2', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 2, name: 'Exercicio 3', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 3, name: 'Exercicio 4', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 4, name: 'Exercicio 5', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 5, name: 'Exercicio 6', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 6, name: 'Exercicio 7', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }, 
            { key: 7, name: 'Exercicio 8', link: 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761' }    
          ]},
        ]},
      ]

    }
  }

  //onPress={() => Actions.listVideo({exercicios: treatType.exercicio })}
  renderTreatment (treatType) {
    return (  
      <TouchableOpacity key={treatType.key} style={styles.bottomItem} 
        onPress={ treatType.key === 0 ? () => Actions.esvaziamento({treat: this.state.cea, title:treatType.name}) : 
        () => Actions.esvaziamento({treat: this.state.sea, title:treatType.name})}  >
        <View style={styles.bottomItemInner} >
          <Text style={styles.text}>{treatType.name}</Text>  
        </View>
      </TouchableOpacity>
    )
  }
  
  render() { 
    return (
      <View stles={styles.container}>
        <View style={styles.bottom}>
          { this.props.treatmentType.map((treatType) => this.renderTreatment(treatType)) }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   bottom: {
     height: '90%',
     backgroundColor: '#FFF',
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 5,
   },
   bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
   },
   bottomItemInner: {
    flex: 1,
    backgroundColor: '#9E3256',
    opacity: 1,
   },
   text: {
     textAlign: 'center',
     color: '#FFF',
     fontWeight: 'bold',
     fontSize: 20,
   }
});