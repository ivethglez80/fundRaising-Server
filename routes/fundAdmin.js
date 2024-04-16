const {Router} = require ("express");

const {  createEntryHandler,
    getFundDataHandler,
    updtTotalHandler}  = require ("./../handlers/fundGoalHandler");

const fundRouter = Router();

const validate = (req,res,next)=> {
    const {totalAmount} = req.body;
    if(!totalAmount)
        return res.status(400).json({error:"Debe ingresar un monto"})
    next();
}

fundRouter.post("/fundAdmin",validate, createEntryHandler);
fundRouter.get("/fundAdmin", getFundDataHandler);
fundRouter.put("/fundAdmin", updtTotalHandler);

module.exports = fundRouter;