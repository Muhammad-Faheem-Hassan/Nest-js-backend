import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTestDto } from "./dto/create-test.dto";
import { UpdateTestDto } from "./dto/update-test.dto";
import { Test, TestDocument } from "./entities/test.entity";

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name) private readonly testModel: Model<TestDocument>
  ) {}

  create(createTestDto: CreateTestDto) {
    const createTest = new this.testModel(createTestDto);
    return createTest.save();
  }

  findAll(where = {}) {
    return this.testModel.find(where).exec();
  }

  findOne(id: string) {
    return this.testModel.findById(id).exec();
  }

  remove(id: string) {
    return this.testModel.deleteOne({ _id: id }).exec();
  }

  update(id: string, updateTestDto: UpdateTestDto) {
    return this.testModel.updateOne({ _id: id }, updateTestDto).exec();
  }
}
