/* eslint-disable new-cap */
import express from 'express';
import {playlist} from '../../models/playlistModel';

export const deleteRouterPlaylist = express.Router();

/**
 * Delete HTTP Petition of Playlists Collection
 */
deleteRouterPlaylist.delete('/music-db/playlists', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A title must be provided',
    });
  } else {
    playlist.findOneAndDelete({name: req.query.name.toString()}).then((playlist) => {
      if (!playlist) {
        res.status(404).send({
          error: 'Playlist not found',
        });
      } else {
        res.send(playlist);
      }
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
});
