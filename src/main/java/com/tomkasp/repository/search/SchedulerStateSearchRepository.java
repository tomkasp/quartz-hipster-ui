package com.tomkasp.repository.search;

import com.tomkasp.entities.SchedulerState;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface SchedulerStateSearchRepository extends ElasticsearchRepository<SchedulerState, String> {
}
