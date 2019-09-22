import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/domain/book-item.model';
import { BookNode } from 'src/app/domain/book-node.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  bookNodes: BookNode[] = [
    {
      categoryName: "技术书籍",
      books: [
        {
          id: 1,
          name: "深入理解C#",
          hash: 'f3805eca632afd73be4e5fd6d9452784',
          cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
        },
      ],
      children: [
        {
          categoryName: "C#/.NET",
          books: [
            {
              id: 1,
              name: "深入理解C#",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 2,
              name: "CLR via C#",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 3,
              name: "C#并发编程经典案例",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 4,
              name: "C#函数式编程",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 5,
              name: ".NET企业级应用架构设计",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 6,
              name: ".NET设计规范：约定、惯用法与模式",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
          ]
        },
        {
          categoryName: "Golang",
          books: [
            {
              id: 3,
              name: "Go Web编程11",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 4,
              name: "Go Web编程22",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            }
          ]
        }
      ]
    },
    {
      categoryName: "非技术书籍",
      children: [
        {
          categoryName: "经济学",
          books: [
            {
              id: 1,
              name: "经济学原理：微观经济学",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 2,
              name: "经济学原理：宏观经济学",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            }
          ]
        },
        {
          categoryName: "心理学",
          books: [
            {
              id: 3,
              name: "社会心理学",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            },
            {
              id: 4,
              name: "乌合之众：大众心理学",
              cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
            }
          ]
        }
      ]
    }
  ];

  bookItems: BookItem[] = [
    {
      id: 1,
      hash: 'f3805eca632afd73be4e5fd6d9452784',
      name: "Go Web编程11",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
    {
      id: 2,
      name: "Go Web编程22",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
    {
      id: 3,
      name: "Go Web编程33",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
    {
      id: 4,
      name: "Go Web编程44",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
    {
      id: 5,
      name: "Go Web编程55",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
    {
      id: 6,
      name: "Go Web编程66",
      cover: "https://urania-static-test.oss-cn-beijing.aliyuncs.com/test/Image00077.jpg"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
