package com.cyber.sentinel.backend.model.Containers;

public class CVE {
    private String cveId;
    private String attackVector;
    private String impact;
    private double score;
    private String userInteraction;
    private String attackComplexity;
    private String description;

    public CVE() {
    }

    public CVE(String cveId, String attackVector, String impact, double score, String userInteraction, String attackComplexity, String description) {
        this.cveId = cveId;
        this.attackVector = attackVector;
        this.impact = impact;
        this.score = score;
        this.userInteraction = userInteraction;
        this.attackComplexity = attackComplexity;
        this.description = description;
    }

    public CVE(CVE other) {
        this.cveId = other.cveId;
        this.attackVector = other.attackVector;
        this.impact = other.impact;
        this.score = other.score;
        this.userInteraction = other.userInteraction;
        this.attackComplexity = other.attackComplexity;
        this.description = other.description;
    }

    public String getCveId() {
        return cveId;
    }

    public void setCveId(String cveId) {
        this.cveId = cveId;
    }

    public String getAttackVector() {
        return attackVector;
    }

    public void setAttackVector(String attackVector) {
        this.attackVector = attackVector;
    }

    public String getImpact() {
        return impact;
    }

    public void setImpact(String impact) {
        this.impact = impact;
    }

    public float getScore() {
        return (float) score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getUserInteraction() {
        return userInteraction;
    }

    public void setUserInteraction(String userInteraction) {
        this.userInteraction = userInteraction;
    }

    public String getAttackComplexity() {
        return attackComplexity;
    }

    public void setAttackComplexity(String attackComplexity) {
        this.attackComplexity = attackComplexity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
