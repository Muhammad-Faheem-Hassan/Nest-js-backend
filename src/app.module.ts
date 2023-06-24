import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { APP_GUARD } from "@nestjs/core";
import { TestModule } from "./Test/test.module";


const CONNECTION_STRING = process.env.MONGO_CON_STRING || "mongodb://localhost:27017/Check";
@Module({
  imports: [
    MongooseModule.forRoot(CONNECTION_STRING),
    TestModule
  ],
 
})
export class AppModule { }
