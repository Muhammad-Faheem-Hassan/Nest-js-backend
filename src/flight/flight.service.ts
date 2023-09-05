import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Duffel } from '@duffel/api'



@Injectable()
export class FlightService {
  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  findAll() {
    const duffel = new Duffel({
      token: "duffel_test_5yz9iXLeXC-te8-UlktZkHSnyskqJVUlScDPEu_eGxB",
    })
    return duffel;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
