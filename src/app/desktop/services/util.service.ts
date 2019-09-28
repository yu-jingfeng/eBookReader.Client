import { Injectable } from '@angular/core';
import { ParallelHasher } from "ts-md5/dist/parallel_hasher";

@Injectable()
export class UtilService {

  constructor() { }

  getMD5HashFromFile(file: File) {
    let hasher = new ParallelHasher('/path/to/ts-md5/dist/md5_worker.js');


    hasher.hash(file).then(function (result) {
      console.log('md5 of fileBlob is', result);
    });
  }
}
