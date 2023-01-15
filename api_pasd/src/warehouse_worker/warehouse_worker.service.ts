import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs'

@Injectable()
export class WarehouseWorkerService {
    
    async updateLabel(){
        
        const filePath = 'path/to/file.txt';
        const fileData = fs.readFileSync(filePath);
        if(fileData){
        const formData = new FormData();
        formData.append('labelFile', fileData, 'file.txt');
        }
        console.log(await axios.post(
        'https://pasd-webshop-api.onrender.com/api/label?delivery_id=3689',
        formData,
        {
            headers: {
            'accept': 'application/json',
            'x-api-key': '6FQeQLpd2LvnCRQpdxHf',
            'Content-Type': 'multipart/form-data'
            }
        }
        )
        .then(response => {
        console.log();
        })
        .catch(error => {
        console.log(error);
        }));
    }
}
