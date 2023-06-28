import { Controller, Injectable } from '@nestjs/common';

@Controller('client')
export class ClientController {
    constructor(@Injectable("USER_SERVICE") private readonly clientService:C {
        
    })
}
