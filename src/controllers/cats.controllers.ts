import { Body, Controller, Get, Post, Query} from "@nestjs/common";
import { query } from "express";
import { createCatDto } from "src/dto/create.cats.dto";

@Controller("cats")
export class catsControllers{

@Post()
async reate(@Body() createCatDto:createCatDto):Promise<string>{
console.log(`Body content: ${JSON.stringify(createCatDto)}`);

return `cette action cree un niveau chat ${JSON.stringify(createCatDto.name)}, ${JSON.stringify(createCatDto.age)}`
// return `cette action cree un niveau chat ${JSON.stringify(createCatDto)}`;

}    

@Get()
findAll(@Query()query:any):string{
console.log('Query parameters:', query);
return `Query parameters received: ${JSON.stringify(query)}`;
}
}