const {FundGoal} = require ("./../src/db");

const createEntry = async (totalAmount, newEntry) => 
                    await FundGoal.create({totalAmount, newEntry});

const getFundData = async () => {
    const dbData = await FundGoal.findAll();
    return [...dbData];
};

const updtTotal = async (fundGoal, newEntry) => {
    try {        
          const newTotalAmount = fundGoal.totalAmount + newEntry;
          await fundGoal.update({totalAmount: newTotalAmount, newEntry: newEntry});
          return {succes:true, message:'Total amount actualizado correctamente'};
    } catch (error) {
        return {succes:false, message: error.message};
    }
};



module.exports = {createEntry, getFundData, updtTotal};