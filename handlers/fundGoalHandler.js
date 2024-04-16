const {createEntry, getFundData, updtTotal} = require ("../controllers/fundGoalController");
const { FundGoal } = require ('../src/db')



const createEntryHandler = async (req,res) => {
    const {totalAmount, newEntry} = req.body;
    try {
        const newFundEntry = await createEntry(totalAmount, newEntry);
        res.status(201).json(newFundEntry);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getFundDataHandler = async (req,res) => {
    try {
        const result = await getFundData();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const updtTotalHandler = async (req, res) => {
    try {
        const {newEntry} = req.body;
        const fundGoal = await FundGoal.findOne({
            order: [['createdAt', 'DESC']]
        });
        if (!fundGoal){
            throw new Error ('No se encontro el registro en FundGoal');
        }
            const result = await createEntry(fundGoal.totalAmount+newEntry, newEntry);            
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
};

module.exports = {
    createEntryHandler,
    getFundDataHandler,
    updtTotalHandler
};