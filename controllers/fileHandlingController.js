const fs=require('fs');

exports.create= (req,res) =>{
    try{
          fs.writeFileSync('./testfile.txt','Hello World!');
          return res.status(200).json({message:'File created successfully'});
    }
    catch(err){
        console.log(" there is error in createfile controller => ",err);
        return res.status(500).json({message:'Internal server error'});
    }
};