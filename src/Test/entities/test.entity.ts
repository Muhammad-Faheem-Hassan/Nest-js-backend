import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { text } from "aws-sdk/clients/customerprofiles";
import { Document } from "mongoose";
export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lName: text;
}

export const TestSchema = SchemaFactory.createForClass(Test);


