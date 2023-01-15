import { Controller } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { DddelivererService } from './dddeliverer.service';

@Controller('dddscheduler')
export class DddelivererController {
    constructor(private readonly dddelivererService: DddelivererService){}
    
    @Patch('/:id')
    patchDelvery(
    @Param('id')id,
    @Body()toPatch 
    ){
        return this.dddelivererService.patchDelivery(toPatch,id);
    }

}
