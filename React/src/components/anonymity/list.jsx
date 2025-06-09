import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'


const list = () => {
  return (
    <>
      {/* prettier-ignore */}
      <section>
          <div>
            <div class="title">
                <p>익명 게시판</p>
            </div>
            <div class="article-wrapper">
              <div class="search">
                <div>
                  <select>
                    <option value="">제목</option>
                    <option value="">작성자</option>
                  </select>
                </div>
                <div>
                  <input type="text" placeholder="검색"/>
                  <a href="#"><img src="/images/board/notice/Icon.png" alt="검색"/></a>
                </div>
              </div>
                <table>
                  <thead>
                    <tr>
                      <th><input type="checkbox"/></th>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>번호</td>
                      <td><a href="">제목</a></td>
                      <td>작성자</td>
                      <td>작성일자</td>
                    </tr>
                  </tbody>
                </table>
              <div class="footer">
                <div class="delete">
                  <button type="button">선택삭제</button>
                </div>
                <div class="page">
                  <a href="#">&lt;</a>
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">&lt;</a>
                </div>
                <div class="write">
                  <button type="button">글쓰기</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default list
