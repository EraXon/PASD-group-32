import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class WarehouseWorkerService {
    
    async updateLabel(){
        const fs = require('fs');
        console.log(__dirname);
        console.log(fs.readdirSync(__dirname));
        const fileDescriptor = fs.openSync('./newfile.txt', 'r');
        const file = new fs.File(fileDescriptor, './newfile.txt');
        const formData = new FormData();
        formData.append('labelFile', file, 'newfile.txt');
        axios.post(
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
        });
    }
}
