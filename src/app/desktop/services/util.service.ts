import { Injectable } from '@angular/core';
import { SparkMD5 } from 'src/app/utils/spark-md5';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class UtilService {

  constructor() { }

  getMD5HashFromFile(file: File): Observable<string> {

    var hashSource = new Subject<string>();

    //var spark = SparkMD5.hash('123', false);

    var blobSlice = File.prototype.slice ||
      (<any>File.prototype).mozSlice ||
      (<any>File.prototype).webkitSlice,
      chunkSize = 2 * 1024 * 1024, // 2M
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,

      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader();

    fileReader.onload = function asd(e: any) {
      spark.append(e.target.result);
      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        var hash = spark.end();
        console.log('finished loading');
        console.info('computed hash', hash);  // Compute hash
        hashSource.next(hash);
      }
    };

    fileReader.onerror = function () {
      console.warn('oops, something went wrong.');
    };

    function loadNext() {
      var start = currentChunk * chunkSize,
        end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }
    loadNext();

    return hashSource.asObservable();
  }
}
