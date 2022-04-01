const Video = require("../models/Video");

class VideoController {
    //CREATE
    async create(req, res) {
        const newVideo = new Video(req.body);

        try {
            const savedVideo = await newVideo.save();
            return res.status(200).json(savedVideo);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //UPDATE
    async update(req, res) {
        try {
            const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json(updatedVideo);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //FIND ALL
    async index(req, res) {
        try {
            const videos = await Video.find();
            return res.send(videos);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //FIND BY ID
    async showById(req, res) {
        try {
            const video = await Video.findById(req.params.id);
            return res.send(video);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    //DELETE
    async delete(req, res) {
        try {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Video has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new VideoController();
