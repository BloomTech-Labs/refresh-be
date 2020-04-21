const express = require('express')
const Metrics = require('./metrics-model');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const AllMetrics = await Metrics.getAllMetrics()
        res.status(200).json(AllMetrics)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not retrieve Metrics from the database' })
    }
})
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Metrics.getMetricById(id)
        .then(metric => {
            if (metric) {
                res.json(metric);
            } else {
                res.status(404).json({
                    message: "Could not find metric with given id.",
                });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get metric" });
        });
});
router.post('/', async (req, res) => {
    const metric = req.body;
    try {
        if(metric) {
            const AddedMetric = await Metrics.addMetric(metric)
            res.status(200).json(AddedMetric)
        } else {
            res.status(400).json({ error: 'Please provide a Metric' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not add metrict the database' })
    }
})



module.exports = router;