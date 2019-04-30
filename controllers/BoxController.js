const Box = require('../models/Box');

class BoxController{
	async all(req, res){
		const box = await Box.find();
		return res.json(box);
	}

	async store(req, res){
		const titulo = req.body.title;
		const box = await Box.create({ title: titulo});
		return res.json(box);
	}

	async show(req, res){
		const box = await Box.findById(req.params.id).populate({
			path: 'files',
			options: {sort: { createdAt: -1 }}
		});

		return res.json(box);
	}
}

module.exports = new BoxController();