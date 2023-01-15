import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class WarehouseWorkerService {
    
    async updateLabel(){
        const fs = require('fs');
        console.log(__dirname);
        console.log(fs.readdirSync(__dirname));
        /*await fs.writeFile('./newfile.txt', 'Hello World!', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        /*
        const filePath = './newfile.txt';
        const fileData = fs.readFileSync(filePath);
        */
        const formData = new FormData();
        formData.append('labelFile', fs.readFileSync('./newfile.pdf;type=application/pdf'), './newfile.pdf;type=application/pdf');
        
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
