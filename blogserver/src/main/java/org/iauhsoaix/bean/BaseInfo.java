package org.iauhsoaix.bean;

public abstract class BaseInfo {
    //主键id字段，不可修改
    protected Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}