package org.iauhsoaix.dal.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.iauhsoaix.bean.Article;
import org.iauhsoaix.dal.entity.ArticleEntity;
import org.iauhsoaix.utils.BasicMapper;

import java.util.List;

/**
 * Edited by iauhsoaix on 2017/12/20.
 */
@Mapper
public interface ArticleMapper extends BasicMapper<ArticleEntity> {
    int addNewArticle(Article article);

    int updateArticle(Article article);

    List<Article> getArticleByState(@Param("state") Integer state, @Param("start") Integer start, @Param("count") Integer count, @Param("uid") Long uid,@Param("keywords") String keywords);

//    List<Article> getArticleByStateByAdmin(@Param("start") int start, @Param("count") Integer count, @Param("keywords") String keywords);

    int getArticleCountByState(@Param("state") Integer state, @Param("uid") Long uid, @Param("keywords") String keywords);

    int updateArticleState(@Param("aids") Long aids[], @Param("state") Integer state);

    int deleteArticleById(@Param("aids") Long[] aids);

    Article getArticleById(Long aid);

    void pvIncrement(Long aid);

    //INSERT INTO pv(countDate,pv,uid) SELECT NOW(),SUM(pageView),uid FROM article GROUP BY uid
    void pvStatisticsPerDay();

    List<String> getCategories(Long uid);

    List<Integer> getDataStatistics(Long uid);
}
