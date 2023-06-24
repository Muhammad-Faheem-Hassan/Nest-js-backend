import { text } from "aws-sdk/clients/customerprofiles";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateTestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lName: text;
}
